import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('shold be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,asdfasdgdsfgawsefgawersfg'
        })).resolves.not.toThrow()// é esperado que essa função chegue até o final e não dispare erro

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })


    it('shuld not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,asdfasdgdsfgawsefgawersfg'
        })).rejects.toThrow()// é esperado que essa função rejeite e dispare um erro
    })

    it('shuld not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,asdfasdgdsfgawsefgawersfg'
        })).rejects.toThrow()// é esperado que essa função rejeite e dispare um erro
    })

    it('shuld not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: '123'
        })).rejects.toThrow()// é esperado que essa função rejeite e dispare um erro
    })
})