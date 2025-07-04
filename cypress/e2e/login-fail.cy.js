describe('Login failure on Fidibo', () => {
  it('should show error message with invalid credentials', () => {
    cy.visit('https://fidibo.com/login')

    cy.contains('با ایمیل', { timeout: 10000 }).should('be.visible').click()

    // وارد کردن ایمیل اشتباه
    cy.get('input[type="email"]').should('be.visible').type('fake.user@example.com')

    // کلیک روی دکمه ورود
    cy.get('button').contains('ورود').click({ force: true })

    // صبر برای نمایش فیلد پسورد
    cy.get('button.login-box-submit.active', { timeout: 15000 }).should('be.visible')
    cy.get('input[type="password"]', { timeout: 15000 }).should('be.visible')

    // وارد کردن پسورد اشتباه
    cy.get('input[type="password"]').type('wrongpassword123', { log: false })

    // کلیک روی دکمه ورود نهایی
    cy.get('button.login-box-submit.active').click({ force: true })

    // بررسی اینکه لاگین موفق نبوده: هنوز روی صفحه لاگین هستیم یا پیغام خطا میاد
    cy.url().should('include', '/login')
    cy.contains('خطا', { timeout: 10000 }).should('exist') // فرض بر اینکه پیام خطا با "خطا" باشه
  })
})
