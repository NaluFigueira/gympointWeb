/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';

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
  function isHeaderCentered(index) {
    const item = headers.find(head => head.Id === index);
    if (item) return item.Centered;
    return false;
  }

  function confirmDeletion() {
    if (window.confirm('Você tem certeza de que deseja deletar esse item?')) {
      onDelete();
    }
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
            <tr key={row.Id}>
              {Object.keys(row).map(
                (column, index) =>
                  column !== 'Id' && (
                    <TableData
                      key={row.Id + column}
                      textAlignCenter={isHeaderCentered(index - 1)}
                      contentIsBooleanType={typeof row[column] === 'boolean'}
                      style={{ color: isHelpOrdersTable ? '#666' : '' }}
                    >
                      {typeof row[column] === 'boolean' ? (
                        <Active active={row[column]} />
                      ) : (
                        row[column]
                      )}
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
                    <Link to={`${route}/edit`}>Editar</Link>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <a onClick={() => confirmDeletion(row.Id)}>Apagar</a>
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
