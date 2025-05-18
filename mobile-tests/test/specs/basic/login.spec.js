describe('Demo App - Login Simulado', () => {
    it('deve navegar e marcar o checkbox de preferência', async () => {
        const menuPreference = await $('~Preference');
        await menuPreference.click();

        const prefDependencies = await $('~3. Preference dependencies');
        await prefDependencies.click();

        const checkbox = await $('id=android:id/checkbox');
        await checkbox.click();

        const isChecked = await checkbox.getAttribute('checked');
        expect(isChecked).toBe('true');
    });
});
