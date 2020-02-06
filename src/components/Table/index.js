/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { TableContainer, Active, TableData } from './styles';

export default function Table(props) {
  const {
    headers,
    data,
    route,
    isHelpOrdersTable,
    onClickAnswer,
    onDelete,
  } = props;

  function isHeaderCentered(header) {
    const item = headers.find(head => head.Field === header);
    if (item) return item.Centered;
    return false;
  }

  function verifyIfHeaderExists(header) {
    const item = headers.find(head => head.Field === header);
    return item !== undefined;
  }

  function dataContent(row, column) {
    if (typeof row[column] === 'boolean')
      return <Active active={row[column]} />;

    if (column === 'start_date' || column === 'end_date')
      return format(parseISO(row[column]), 'dd/MM/yyyy');

    return row[column];
  }

  function confirmDeletion(id) {
    if (window.confirm('Você tem certeza de que deseja deletar esse item?')) {
      onDelete(id);
    }
  }

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th
                key={header.Id + header.Title}
                style={{ textAlign: header.Centered ? 'center' : '' }}
              >
                {header.Title}
              </th>
            ))}
            {!isHelpOrdersTable && (
              <>
                <th style={{ textAlign: 'center' }}>
                  <MdEdit />
                </th>
                <th style={{ textAlign: 'center' }}>
                  <MdDelete />
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {Object.keys(row).map(
                column =>
                  verifyIfHeaderExists(column) && (
                    <TableData
                      key={row.id + column}
                      textAlignCenter={isHeaderCentered(column)}
                      contentIsBooleanType={typeof row[column] === 'boolean'}
                      style={{ color: isHelpOrdersTable ? '#666' : '' }}
                    >
                      {dataContent(row, column)}
                    </TableData>
                  )
              )}
              {isHelpOrdersTable ? (
                <td style={{ textAlign: 'end' }}>
                  <a style={{ color: '#4d85ee' }} onClick={onClickAnswer}>
                    Responder
                  </a>
                </td>
              ) : (
                <>
                  <td style={{ textAlign: 'center' }}>
                    <Link
                      to={{
                        pathname: `${route}/edit`,
                        state: { object: row, edit: true },
                      }}
                    >
                      Editar
                    </Link>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <a onClick={() => confirmDeletion(row.id)}>Apagar</a>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

Table.defaultProps = {
  isHelpOrdersTable: false,
  onClickAnswer: () => {},
  onDelete: () => {},
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
      Name: PropTypes.string,
      Centered: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  route: PropTypes.string.isRequired,
  isHelpOrdersTable: PropTypes.bool,
  onClickAnswer: PropTypes.func,
  onDelete: PropTypes.func,
};
