describe('Frontend', () => {
    beforeAll(async () => {
        await page.goto("http://localhost")
    })

    test('Should show list', async () => {
        await expect(page.title()).resolves.toBe("ChallengeGuararapes")
    })
})
