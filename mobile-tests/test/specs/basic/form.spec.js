describe('Demo App - Formulário Simulado', () => {
  it('deve preencher um campo de texto com sucesso', async () => {
    const menuPreference = await $('~Preference');
    await menuPreference.click();

    const prefCode = await $('~5. Preferences from code');
    await prefCode.click();

    // Faz scroll até o item com texto "Edit text preference"
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Edit text preference")');

    const editTextPref = await $('android=new UiSelector().text("Edit text preference")');
    await editTextPref.waitForExist({ timeout: 5000 });
    await editTextPref.click();

    const inputField = await $('id=android:id/edit');
    await inputField.setValue('Teste Automatizado');

    const okButton = await $('id=android:id/button1');
    await okButton.click();
  });
});