import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ImportHeaderController } from "../importHeader.controller";
import { ImportHeaderService } from "../importHeader.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  action: "exampleAction",
  b1DeclaSub1: "exampleB1DeclaSub1",
  b20DelivTermsSub1: "exampleB20DelivTermsSub1",
  b20DelivTermsSub2: "exampleB20DelivTermsSub2",
  b20DelivTermsSub3: "exampleB20DelivTermsSub3",
  b22CurrencyCode: "exampleB22CurrencyCode",
  b22TotalAmount: 42,
  b25BorderTrans: 42,
  b26InlandTrans: 42,
  b27PlaceOfLoading: "exampleB27PlaceOfLoading",
  b48DeferredPay: 42,
  b5Items: 42,
  b9TotalFreight: 42,
  b9TotalInsurance: 42,
  box47CdPayMethod: "exampleBox47CdPayMethod",
  boxaOfficeCode: "exampleBoxaOfficeCode",
  boxaOfficeSubCode: "exampleBoxaOfficeSubCode",
  cdGuaranteeMethod: "exampleCdGuaranteeMethod",
  createdAt: new Date(),
  direction: "exampleDirection",
  id: "exampleId",
  information: "exampleInformation",
  moduleField: "exampleModuleField",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const CREATE_RESULT = {
  action: "exampleAction",
  b1DeclaSub1: "exampleB1DeclaSub1",
  b20DelivTermsSub1: "exampleB20DelivTermsSub1",
  b20DelivTermsSub2: "exampleB20DelivTermsSub2",
  b20DelivTermsSub3: "exampleB20DelivTermsSub3",
  b22CurrencyCode: "exampleB22CurrencyCode",
  b22TotalAmount: 42,
  b25BorderTrans: 42,
  b26InlandTrans: 42,
  b27PlaceOfLoading: "exampleB27PlaceOfLoading",
  b48DeferredPay: 42,
  b5Items: 42,
  b9TotalFreight: 42,
  b9TotalInsurance: 42,
  box47CdPayMethod: "exampleBox47CdPayMethod",
  boxaOfficeCode: "exampleBoxaOfficeCode",
  boxaOfficeSubCode: "exampleBoxaOfficeSubCode",
  cdGuaranteeMethod: "exampleCdGuaranteeMethod",
  createdAt: new Date(),
  direction: "exampleDirection",
  id: "exampleId",
  information: "exampleInformation",
  moduleField: "exampleModuleField",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const FIND_MANY_RESULT = [
  {
    action: "exampleAction",
    b1DeclaSub1: "exampleB1DeclaSub1",
    b20DelivTermsSub1: "exampleB20DelivTermsSub1",
    b20DelivTermsSub2: "exampleB20DelivTermsSub2",
    b20DelivTermsSub3: "exampleB20DelivTermsSub3",
    b22CurrencyCode: "exampleB22CurrencyCode",
    b22TotalAmount: 42,
    b25BorderTrans: 42,
    b26InlandTrans: 42,
    b27PlaceOfLoading: "exampleB27PlaceOfLoading",
    b48DeferredPay: 42,
    b5Items: 42,
    b9TotalFreight: 42,
    b9TotalInsurance: 42,
    box47CdPayMethod: "exampleBox47CdPayMethod",
    boxaOfficeCode: "exampleBoxaOfficeCode",
    boxaOfficeSubCode: "exampleBoxaOfficeSubCode",
    cdGuaranteeMethod: "exampleCdGuaranteeMethod",
    createdAt: new Date(),
    direction: "exampleDirection",
    id: "exampleId",
    information: "exampleInformation",
    moduleField: "exampleModuleField",
    updatedAt: new Date(),
    userId: "exampleUserId",
  },
];
const FIND_ONE_RESULT = {
  action: "exampleAction",
  b1DeclaSub1: "exampleB1DeclaSub1",
  b20DelivTermsSub1: "exampleB20DelivTermsSub1",
  b20DelivTermsSub2: "exampleB20DelivTermsSub2",
  b20DelivTermsSub3: "exampleB20DelivTermsSub3",
  b22CurrencyCode: "exampleB22CurrencyCode",
  b22TotalAmount: 42,
  b25BorderTrans: 42,
  b26InlandTrans: 42,
  b27PlaceOfLoading: "exampleB27PlaceOfLoading",
  b48DeferredPay: 42,
  b5Items: 42,
  b9TotalFreight: 42,
  b9TotalInsurance: 42,
  box47CdPayMethod: "exampleBox47CdPayMethod",
  boxaOfficeCode: "exampleBoxaOfficeCode",
  boxaOfficeSubCode: "exampleBoxaOfficeSubCode",
  cdGuaranteeMethod: "exampleCdGuaranteeMethod",
  createdAt: new Date(),
  direction: "exampleDirection",
  id: "exampleId",
  information: "exampleInformation",
  moduleField: "exampleModuleField",
  updatedAt: new Date(),
  userId: "exampleUserId",
};

const service = {
  createImportHeader() {
    return CREATE_RESULT;
  },
  importHeaders: () => FIND_MANY_RESULT,
  importHeader: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ImportHeader", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ImportHeaderService,
          useValue: service,
        },
      ],
      controllers: [ImportHeaderController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /importHeaders", async () => {
    await request(app.getHttpServer())
      .post("/importHeaders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /importHeaders", async () => {
    await request(app.getHttpServer())
      .get("/importHeaders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /importHeaders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/importHeaders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /importHeaders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/importHeaders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /importHeaders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/importHeaders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/importHeaders")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
