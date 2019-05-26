import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const createCell = (cell, index, state) => (
  <Cell key={cell.key} width={state[`key-${index + 1}`]}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = (cells, state) => cells.map((cell, index) => createCell(cell, index, state));

class SingleSelectTable extends React.Component {
  constructor(props) {
    super(props);
    this.createTableRow = this.createTableRow.bind(this);
    this.createTableRows = this.createTableRows.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleResizeEnd = this.handleResizeEnd.bind(this);
    this.state = { selectedKey: null, 'key-1': 200, 'key-2': 200, 'key-3': 200 };
  }

  handleRowSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
  }

  createTableRow(itemData) {
    return (
      <Row
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(itemData.cells, this.state)}
      </Row>
    );
  }

  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  handleResizeEnd(columnId, width) {
    console.log(`id: ${columnId}, width: ${width}`);
    this.setState(state => ({ [columnId]: state[columnId] + width }));
  }

  render() {
    return (
      <Table
        fill
        style={{ height: '200px' }}
        paddingStyle="standard"
        headerCells={[
          <HeaderCell key="cell-1" isResizable columnId="key-1" onResizeEnd={this.handleResizeEnd} width={this.state['key-1']}>Column 0</HeaderCell>,
          <HeaderCell key="cell-2" isResizable columnId="key-2" onResizeEnd={this.handleResizeEnd} width={this.state['key-2']}>Column 1</HeaderCell>,
          <HeaderCell key="cell-3" isResizable columnId="key-3" onResizeEnd={this.handleResizeEnd} width={this.state['key-3']}>Column 2</HeaderCell>,
        ]}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default SingleSelectTable;
