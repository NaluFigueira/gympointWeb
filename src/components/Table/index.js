import React from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';

import { TableContainer, Active } from './styles';

export default function Table({ headers, data }) {
  function isCentered(index) {
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
                    <td
                      key={row.Id + column}
                      style={
                        typeof row[column] === 'boolean'
                          ? {
                              textAlign: isCentered(index - 1) ? 'center' : '',
                              display: 'flex',
                              justifyContent: 'center',
                            }
                          : {
                              textAlign: isCentered(index - 1) ? 'center' : '',
                            }
                      }
                    >
                      {typeof row[column] === 'boolean' ? (
                        <Active active={row[column]} />
                      ) : (
                        row[column]
                      )}
                    </td>
                  )
              )}
              <td>Editar</td>
              <td>Apagar</td>
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
};
