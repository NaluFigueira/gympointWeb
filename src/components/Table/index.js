/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { TableContainer, Active, TableData } from './styles';

export default function Table({ headers, data, route }) {
  function isHeaderCentered(index) {
    const item = headers.find(head => head.Id === index);
    if (item) return item.Centered;
    return false;
  }

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th
                key={header.Id}
                style={{ textAlign: header.Centered ? 'center' : '' }}
              >
                {header.Name}
              </th>
            ))}
            <th>
              <MdEdit />
            </th>
            <th>
              <MdDelete />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.Id}>
              {Object.keys(row).map(
                (column, index) =>
                  column !== 'Id' && (
                    <TableData
                      key={row.Id + column}
                      textAlignCenter={isHeaderCentered(index - 1)}
                      contentIsBooleanType={typeof row[column] === 'boolean'}
                    >
                      {typeof row[column] === 'boolean' ? (
                        <Active active={row[column]} />
                      ) : (
                        row[column]
                      )}
                    </TableData>
                  )
              )}
              <td>
                <Link to={`${route}/edit`}>Editar</Link>
              </td>
              <td>
                <a>Apagar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

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
};
