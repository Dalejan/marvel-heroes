import { TestBed } from "@angular/core/testing";

import { MarvelService } from "./marvel-service.service";

describe("MarvelServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MarvelService = TestBed.get(MarvelService);
    expect(service).toBeTruthy();
  });
});
