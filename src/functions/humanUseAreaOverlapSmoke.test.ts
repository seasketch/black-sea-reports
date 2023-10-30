/**
 * @jest-environment node
 * @group smoke
 */
import { humanUseAreaOverlap } from "./humanUseAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof humanUseAreaOverlap).toBe("function");
  });
  test("humanUseAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await humanUseAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "humanUseAreaOverlap", example.properties.name);
    }
  }, 120000);
});
