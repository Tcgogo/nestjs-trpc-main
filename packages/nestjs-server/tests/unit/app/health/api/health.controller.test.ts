import type { Logger } from '@nestjs/common'

import type { Mock } from '@/tests/utils/mock'
import { HealthController } from '@/app/health/api/health.controller'

import { createMock } from '@/tests/utils/mock'

describe('healthController', () => {
  let healthController: HealthController
  let logger: Mock<Logger>

  beforeEach(() => {
    logger = createMock<Logger>()
    healthController = new HealthController(logger)
  })

  describe('run', () => {
    it('should return is healthy', () => {
      expect(healthController.run()).toEqual({ status: 'ok' })
      expect(logger.log).toHaveBeenCalledTimes(1)
    })
  })
})
