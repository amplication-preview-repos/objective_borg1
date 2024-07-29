import { Module } from "@nestjs/common";
import { CompDataSegmentItemModuleBase } from "./base/compDataSegmentItem.module.base";
import { CompDataSegmentItemService } from "./compDataSegmentItem.service";
import { CompDataSegmentItemController } from "./compDataSegmentItem.controller";
import { CompDataSegmentItemResolver } from "./compDataSegmentItem.resolver";

@Module({
  imports: [CompDataSegmentItemModuleBase],
  controllers: [CompDataSegmentItemController],
  providers: [CompDataSegmentItemService, CompDataSegmentItemResolver],
  exports: [CompDataSegmentItemService],
})
export class CompDataSegmentItemModule {}
