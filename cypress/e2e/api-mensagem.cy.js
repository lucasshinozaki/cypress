describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMDJhOWI0My0zNGNlLTRmMDUtODBmOS1hNDU0Njc2OGRjNjYiLCJhZG9wdGVyTmFtZSI6Imx1Y2FzIiwiaWF0IjoxNzE4NzQ3NjYzLCJleHAiOjE3MTkwMDY4NjN9.nS53iMz7o8KhdMcweP45TEC7ENFHLHXqiorer6gLp40`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/c02a9b43-34ce-4f05-80f9-a4546768dc66',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})