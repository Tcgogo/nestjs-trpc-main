// import type { ZodError } from 'zod'
// import { UnprocessableEntityException } from '@nestjs/common'
// import { createZodValidationPipe } from 'nestjs-zod'

// export const ZodValidationPipe = createZodValidationPipe({
//   createValidationException: (error: any) => {
//     console.log('%c [ error ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', error)
//     const firstError = error.errors[0]

//     if ('expected' in firstError) {
//       let formattedErrorMessage: string = firstError.code
//       if (firstError.path.length !== 0) { formattedErrorMessage = `Path \`${firstError.path}\` should be \`${firstError.expected}\`, but got \`${firstError.received}\`` }

//       return new UnprocessableEntityException(formattedErrorMessage)
//     }

//     return new UnprocessableEntityException(
//       `\`${firstError.path}\`: ${firstError.message}`,
//     )
//   },
// })
