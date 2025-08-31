import { useState } from "react";
import styled from "@emotion/styled";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
};

const TableWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Th = styled.th<{ sortable?: boolean }>`
  background: #f9fafb;
  text-align: left;
  padding: 12px;
  cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
  user-select: none;
`;

const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #e5e7eb;
`;

const EmptyRow = styled.tr`
  td {
    text-align: center;
    padding: 20px;
    color: #6b7280;
  }
`;

export function Table<T extends Record<string, any>>({
  columns,
  data,
  loading,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  let sortedData = [...data];
  if (sortKey) {
    sortedData.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
      return 0;
    });
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <Th
                key={String(col.key)}
                sortable
                onClick={() => handleSort(String(col.key))}
              >
                {col.label}
                {sortKey === col.key && (sortAsc ? " ▲" : " ▼")}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length}>Loading...</td>
            </tr>
          ) : sortedData.length === 0 ? (
            <EmptyRow>
              <td colSpan={columns.length}>데이터가 없습니다</td>
            </EmptyRow>
          ) : (
            sortedData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <Td key={String(col.key)}>{String(row[col.key])}</Td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}
