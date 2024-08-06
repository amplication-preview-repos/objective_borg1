import { Injectable } from "@nestjs/common";
import { GenerateXmlInput } from "../importProcessing/GenerateXmlInput";
import { HscodeSuggestionInput } from "../importProcessing/HscodeSuggestionInput";

@Injectable()
export class ImportProcessingService {
  constructor() {}
  async GenerateXml(args: GenerateXmlInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SuggestHsCodes(args: HscodeSuggestionInput): Promise<string[]> {
    throw new Error("Not implemented");
  }
}
