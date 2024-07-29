import * as graphql from "@nestjs/graphql";
import { GenerateXmlInput } from "../importProcessing/GenerateXmlInput";
import { HscodeSuggestionInput } from "../importProcessing/HscodeSuggestionInput";
import { ImportProcessingService } from "./importprocessing.service";

export class ImportProcessingResolver {
  constructor(protected readonly service: ImportProcessingService) {}

  @graphql.Mutation(() => String)
  async GenerateXml(
    @graphql.Args()
    args: GenerateXmlInput
  ): Promise<string> {
    return this.service.GenerateXml(args);
  }

  @graphql.Mutation(() => [String])
  async SuggestHsCodes(
    @graphql.Args()
    args: HscodeSuggestionInput
  ): Promise<string[]> {
    return this.service.SuggestHsCodes(args);
  }
}
