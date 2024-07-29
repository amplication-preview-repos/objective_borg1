import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsignorServiceBase } from "./base/consignor.service.base";

@Injectable()
export class ConsignorService extends ConsignorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
