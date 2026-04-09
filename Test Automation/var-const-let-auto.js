/*
Para automation con Playwright, lo mejor es esta regla:

Usa const casi siempre

Porque en automation normalmente:

defines locators
defines datos de prueba
defines páginas, respuestas, selectores

Y casi nunca quieres reasignarlos por accidente.
*/

const URL = "https://example.com"
const email = 'test@test.com'
const password = '123456'
const loginButton = page.getByRole('button', { name: 'Login' })