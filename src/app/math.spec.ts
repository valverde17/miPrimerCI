import { divide } from "./math";

it('Should return 2 with 6 / 3', () => {
    expect(divide(6,3)).toEqual(2);
    expect(divide(10,0)).toEqual(null);
});