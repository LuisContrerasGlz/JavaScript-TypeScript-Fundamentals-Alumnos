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

/*
Usa let solo cuando el valor sí va a cambiar

Por ejemplo:

contadores
variables temporales
datos que dependen de una condición
valores que se recalculan durante el test
*/

let counter = 0
counter += 1 // válido

let status
if (response.ok()) {
  status = "success"
} else {
  status = "error"
}

// Evita usar var, ya que tiene un scope de función y puede causar problemas de hoisting y confusión en el código.

// En Playwright, 1. const para locators

const usernameInput = page.getByLabel('Username')
const passwordInput = page.getByLabel('Password')
const loginButton2 = page.getByRole('button', { name: 'Login' })

// const para test data

const username = 'standard_user'
const password2 = 'secret_sauce'

// const para pages y responses

const response = await page.waitForResponse('**/api/login')
const dashboardTitle = page.getByText('Dashboard')

// let solo si necesitas cambiar algo

let loginAttempts = 0
loginAttempts += 1
let expectedMessage = 'Login successful'

if (environment === 'qa') {
  expectedMessage = 'Welcome QA User'
}

// ejemplo en playwright
import { test, expect } from '@playwright/test'

test('user can log in', async ({ page }) => {
  const username = 'standard_user'
  const password = 'secret_sauce'

  const usernameInput = page.getByLabel('Username')
  const passwordInput = page.getByLabel('Password')
  const loginButton = page.getByRole('button', { name: 'Login' })

  await page.goto('https://example.com/login')
  await usernameInput.fill(username)
  await passwordInput.fill(password)
  await loginButton.click()

  await expect(page).toHaveURL(/dashboard/)
})

