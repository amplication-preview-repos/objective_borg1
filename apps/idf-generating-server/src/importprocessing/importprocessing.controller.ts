import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImportProcessingService } from "./importprocessing.service";
import { HscodeSuggestionInput } from "../importProcessing/HscodeSuggestionInput";

@swagger.ApiTags("importProcessings")
@common.Controller("importProcessings")
export class ImportProcessingController {
  constructor(protected readonly service: ImportProcessingService) {}

  @common.Post("generate-xml")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateXml(
    @common.Body()
    body: HscodeSuggestionInput
  ): Promise<string> {
        return this.service.GenerateXml(body);
      }

  @common.Post("suggest-hscodes")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SuggestHsCodes(
    @common.Body()
    body: HscodeSuggestionInput
  ): Promise<string[]> {
        return this.service.SuggestHsCodes(body);
      }
}
