// Plate/Slate editor node types
export interface PlateTextNode {
  text: string;
}

export interface PlateElementNode {
  type: string;
  children: PlateNode[];
}

export type PlateNode = PlateTextNode | PlateElementNode;

export type PlateValue = PlateNode[];

