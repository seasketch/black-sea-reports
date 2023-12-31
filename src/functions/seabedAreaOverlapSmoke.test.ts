/**
 * @jest-environment node
 * @group smoke
 */
import { seabedAreaOverlap } from "./seabedAreaOverlap";
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof seabedAreaOverlap).toBe("function");
  });
  test("seabedAreaOverlapSmoke - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await seabedAreaOverlap(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "seabedAreaOverlap", example.properties.name);
    }
  }, 120000);
});
