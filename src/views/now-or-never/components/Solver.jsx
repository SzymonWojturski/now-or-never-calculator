import highsFactory from 'highs'

export const loadSolver = async () => {
  return await highsFactory({ locateFile: file => `/${file}` })
}

export const solveProblem = async (highs, inputs) => {
  const { shells, hammers, demons, crystals, shellFlag, hammerFlag } = inputs

  const t5Reward = !shellFlag ? 5 : 8
  const t12Limit = hammerFlag ? Math.floor(hammers / 3) : 0

  const PROBLEM = `
Maximize
 obj: 1 t1 + 2 t2 + 2 t3 + 2 t4 + ${t5Reward} t5 + 7 t6 + 9 t7 + 11 t8 + 9 t9 + 12 t10 + 14 t11 + 8 t12

Subject To
 c1: 1 t1 + 0 t2 + 0 t3 + 0 t4 + 3 t5 + 1 t6 + 0 t7 + 0 t8 + 1 t9 + 1 t10 + 0 t11 + 3 t12 + 0 t13 = ${shells}
 c2: 0 t1 + 1 t2 + 0 t3 + 0 t4 + 0 t5 + 2 t6 + 1 t7 + 0 t8 + 1 t9 + 1 t10 + 0 t11 + 0 t12 + 3 t13 = ${hammers}
 c3: 0 t1 + 0 t2 + 1 t3 + 0 t4 + 0 t5 + 0 t6 + 2 t7 + 0 t8 + 1 t9 + 1 t10 + 2 t11 + 0 t12 + 0 t13 = ${demons}
 c4: 0 t1 + 0 t2 + 0 t3 + 1 t4 + 0 t5 + 0 t6 + 0 t7 + 3 t8 + 0 t9 + 1 t10 + 2 t11 + 0 t12 + 0 t13 = ${crystals}
 c5: t12 <= ${t12Limit}

Bounds
 0 <= t1 <= +infinity
 0 <= t2 <= +infinity
 0 <= t3 <= +infinity
 0 <= t4 <= +infinity
 0 <= t5 <= +infinity
 0 <= t6 <= +infinity
 0 <= t7 <= +infinity
 0 <= t8 <= +infinity
 0 <= t9 <= +infinity
 0 <= t10 <= +infinity
 0 <= t11 <= +infinity
 0 <= t12 <= +infinity

General
 t1 t2 t3 t4 t5 t6 t7 t8 t9 t10 t11 t12

End
`

  const sol = await highs.solve(PROBLEM)

  const values = Array.from({ length: 12 }, (_, i) => sol.Columns[`t${i + 1}`].Primal)
  const objective = sol.ObjectiveValue

  return { values, objective, shellFlag, hammerFlag }
}
