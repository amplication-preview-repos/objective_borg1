import { Module } from "@nestjs/common";
import { ImportHeaderModuleBase } from "./base/importHeader.module.base";
import { ImportHeaderService } from "./importHeader.service";
import { ImportHeaderController } from "./importHeader.controller";
import { ImportHeaderResolver } from "./importHeader.resolver";

@Module({
  imports: [ImportHeaderModuleBase],
  controllers: [ImportHeaderController],
  providers: [ImportHeaderService, ImportHeaderResolver],
  exports: [ImportHeaderService],
})
export class ImportHeaderModule {}
