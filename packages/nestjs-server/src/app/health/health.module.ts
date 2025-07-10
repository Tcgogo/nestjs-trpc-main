import { Module } from "@nestjs/common";

import { HealthController } from "./api/health.controller";
import { HealthService } from "./health.service";
import { HealthRouter } from "./health.router";

@Module({
  controllers: [HealthController],
  providers: [HealthService, HealthRouter],
})
export class HealthModule {}
