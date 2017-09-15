import axios from 'axios';
;

const url = '/api';

const getBase = (_id) =>
    axios.get(url + '/base/' + _id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const getTablesByIds = (ids) =>
    axios.get(url + '/tables/ids/' + ids.join(':'))
        .then((response) => response.data)
        .catch(R.tap(console.error));

const getTableById = (tableId) =>
	axios.get(url + '/tables/' + tableId)
		.then(response => response.data)
		.catch(R.tap(console.error))

const addTable = (table) =>
    axios.post(url + '/tables', table)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateBaseByNewTable = (payload) =>
    axios.put(url + '/base/' + payload.baseId + '/tables/' + payload.table._id)
        .then((response) => response.data)
        .catch(R.tap(console.error));

const updateTable = ({ _id, body }) =>
	axios.put(url + '/tables/' + _id, body)
		.then((response) => response.data)
		.catch(R.tap(console.error));

const addFieldsToTable = ({tableId, currentViewId}) => {
    return axios.post(url + '/tables/' + tableId + '/fields/', {
        field: {
            name: 'Text line',
            type: 'text',
        },
        currentViewId: currentViewId,
    }).then(() => axios.put(url + '/tables/' + tableId + '/records/',
            {data: {data: '', currentView: currentViewId}}
        ))
        .then((table) => table.data)
        .catch(R.tap(console.error));
};

const addRecord = ({tableId}) => {
    return axios.put(url + '/tables/' + tableId + '/fields/', {data: ''})
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

const deleteTable = (tableId) =>
	axios.delete(url + '/tables/' + tableId)
		.then((response) => response.data)
		.catch(R.tap(console.error));

const updateField = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/fields/' + payload.fieldId, payload)
        .then((response) => response)
        .catch(R.tap(console.error));
};

const deleteFieldRecords = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/fields/' + payload.fieldId,
        {data: {currentView: payload.currentView}})
        .then((response) => response)
        .catch(R.tap(console.error));
};

const deleteRecord = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/records/' + payload.recordId)
        .then((response) => response)
        .catch(R.tap(console.error));
};

const filterRecords = (payload) => {
    return axios.get(url + '/tables/' + payload.tableId + '/views/' + payload.viewId + '/fields/filter/')
        .then((response) => response)
        .catch(R.tap(console.error));
};

const addFilter = (payload) => {
    return axios.post(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/' + payload.fieldIndex + '/filters/')
        .then((response) => response)
        .catch(R.tap(console.error));
};

const updateFilter = (payload) => {
    return axios.put(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/fields/' + payload.fieldId + '/' + payload.fieldIndex + '/filters/' + payload.filterId,
        {data: {condition: payload.condition, query: payload.filterQuery}})
        .then((response) => response)
        .catch(R.tap(console.error));
};

const removeFilter = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/filters/' + payload.filterId)
        .then((response) => response)
        .catch(R.tap(console.error));
};

const removeAllFilters = (payload) => {
    return axios.delete(url + '/tables/' + payload.tableId + '/views/' + payload.viewType + '/' +
        payload.viewId + '/filters')
        .then((response) => response)
        .catch(R.tap(console.error));
};

const emitTableCoworker = (user, tableId) => {
    return socket.emit('client-upload-table', user, tableId);
};

const uploadFile = ({data, typeOfFile, record_dataId, tableId}) =>
	axios.post(`/files/attachment/${record_dataId}/${typeOfFile}/${tableId}`, data)
		.then(response => response.data)
		.catch(R.tap(console.error))

const deleteFile = ({typeOfFile, record_dataId, tableId, fileNamesStr}) =>
	axios.delete(`/files/attachment/${record_dataId}/${typeOfFile}/${tableId}/${fileNamesStr}`)
		.then(response => response.data)
		.catch(R.tap(console.error))

const addView = ({tableId, viewType}) => {
    return axios.post(url + '/tables/' + tableId + '/views', {tableId, viewType})
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

const getTableView = ({tableId, viewId, viewType}) => {
    return axios.get(url + '/tables/' + tableId + '/views/' + viewId + '/' + viewType)
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

const deleteView = ({tableId, viewId, viewType}) => {
    return axios.delete(url + '/tables/' + tableId + '/views/' + viewId + '/' + viewType)
        .then((response) => response.data)
        .catch(R.tap(console.error));
};

const updateKanban = (kanbanView) =>
	axios.put(url + '/view/kanban/' + kanbanView._id, R.dissoc('_id', kanbanView))
		.then((response) => response.data)
		.catch(R.tap(console.error));

const getMembersByBaseId = (baseId) =>
	axios.get(url + '/team/' + baseId + '/members')
		.then(response => response.data)
		.catch(R.tap(console.error))

export {
    getBase,
    getTablesByIds,
    addTable,
    updateBaseByNewTable,
	updateTable,
    addFieldsToTable,
    addRecord,
	deleteTable,
    updateField,
    deleteFieldRecords,
    deleteRecord,
    filterRecords,
	uploadFile,
	deleteFile,
    emitTableCoworker,
    addView,
    deleteView,
    removeFilter,
    addFilter,
    updateFilter,
	getTableById,
	updateKanban,
    removeAllFilters,
	getMembersByBaseId,
    getTableView,
};