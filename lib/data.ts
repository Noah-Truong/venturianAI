import backendData from "@/backendtools.json";

export type Employee = (typeof backendData.employees)[number];
export type Review = (typeof backendData.reviews)[number];

export const company = backendData.company;
export const employees = backendData.employees;
export const reviews = backendData.reviews;

export function getEmployee(id: string): Employee | undefined {
  return employees.find((e) => e.id === id);
}

export function getEmployeesByDepartment(department: string): Employee[] {
  return employees.filter((e) => e.department === department);
}
