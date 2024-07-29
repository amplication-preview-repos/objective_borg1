import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsigneeServiceBase } from "./base/consignee.service.base";

@Injectable()
export class ConsigneeService extends ConsigneeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
