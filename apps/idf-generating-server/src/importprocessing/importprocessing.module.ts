import { Module } from "@nestjs/common";
import { ImportProcessingService } from "./importprocessing.service";
import { ImportProcessingController } from "./importprocessing.controller";
import { ImportProcessingResolver } from "./importprocessing.resolver";

@Module({
  controllers: [ImportProcessingController],
  providers: [ImportProcessingService, ImportProcessingResolver],
  exports: [ImportProcessingService],
})
export class ImportProcessingModule {}
