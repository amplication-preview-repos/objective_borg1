import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImportHeaderServiceBase } from "./base/importHeader.service.base";

@Injectable()
export class ImportHeaderService extends ImportHeaderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
