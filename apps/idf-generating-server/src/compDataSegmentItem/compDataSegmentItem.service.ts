import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompDataSegmentItemServiceBase } from "./base/compDataSegmentItem.service.base";

@Injectable()
export class CompDataSegmentItemService extends CompDataSegmentItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
