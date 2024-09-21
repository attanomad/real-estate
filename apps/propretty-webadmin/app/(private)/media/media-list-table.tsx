"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../properties/data-table";
import { File } from "./actions";

export const columns: ColumnDef<File>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "mimetype",
    header: "MIME Type",
  },
];

export default function FileListTable({ files }: { files: File[] }) {
  return (
    <DataTable
      columns={columns}
      data={files}
    />
  );
}
