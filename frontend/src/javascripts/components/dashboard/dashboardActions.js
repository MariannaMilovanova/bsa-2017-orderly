const getBaseById = (_id, tableId) => ({
    type: 'GET_BASE',
    _id: _id,
    tableId: tableId
});

const getTables = () => ({
    type: 'GET_TABLES'
});

const deleteTable = (tableId) => ({
    type: 'DELETE_TABLE',
    tableId: tableId
});

const togglePopup = () => ({
    type: 'TOGGLE_POPUP'
});

const setActive = (tableId) => ({
    type: 'SET_ACTIVE_TAB',
    tableId: tableId
});

const setTableIdToActiveModal = (tableId) => ({
    type: 'SET_TABLE_ID_TO_ACTIVE_MODAL',
    tableId: tableId
});

const addTable = ({table, baseId}) => ({
    type: 'ADD_TABLE',
    table: table,
    baseId: baseId
});

const switchTable = (tableId) => ({
    type: 'SWITCH_TABLE',
    tableId: tableId
});

const openMenu = (tableId) => ({
    type: 'OPEN_EDIT_MENU',
    tableId: tableId
});

const closeMenu = () => ({
    type: 'CLOSE_EDIT_MENU'
});

const addTableToBaseById = (baseId) => {
    return {
        type: 'ADD_TABLE_TO_BASE',
        baseId
    };
};

const setTabsModal = (activeModal) => {
    return {
        type: 'SET_TABS_MODAL',
        activeModal: activeModal
    };
};

const updateTable = (newData, tableId) => {
    return {
        type: 'UPDATE_TABLE',
        newData,
        tableId
    };
};

const checkTableName = (renameIsError) => {
    return {
        type: 'CHECK_TABLE_NAME',
        renameIsError: renameIsError
    };
};

const addRecord = (tableId) => {
    return {
        type: 'ADD_RECORD',
        tableId
    };
};

export function addField(tableId) {
    return {
        type: 'ADD_FIELD',
        tableId: tableId
    };
}

const selectRecord = (recordId) => {
    return {
        type: 'SELECT_RECORD',
        recordId: recordId
    };
};

const activateRecord = (recordId) => {
    return {
        type: 'ACTIVATE_RECORD',
        recordId: recordId
    };
};

const changeRecord = (tableId, recordId, data, user) => {
    return {
        type: 'CHANGE_RECORD',
        tableId: tableId,
        recordId: recordId,
        data: data,
        user: user
    };
};

const blurRecord = (recordId) => {
    return {
        type: 'BLUR_RECORD',
        recordId: recordId
    };
};

const blurRecordComponent = (recordId) => {
    return {
        type: 'BLUR_RECORD_COMPONENT',
        recordId: recordId
    };
};

const openRecordDialog = (index) => {
    return {
        type: 'OPEN_RECORD_DIALOG',
        index: index,

    };
};

const addComment = (userId, recordId, tableId, comment) => {
    return {
        type: 'ADD_COMMENT',
        userId: userId,
        recordId: recordId,
        tableId: tableId,
        comment: comment
    };
};

const getCoworkersList = (coworkers) => {
    return {
        type: 'GET_COWORKERS_LIST',
        coworkers: coworkers
    };
};

export function changeView(viewId) {
    return {
        type: 'CHANGE_VIEW',
        viewId
    };
}

export function sortRecords(table, fieldId, sortOption) {
    return {
        type: 'SORT_RECORDS',
        table: table,
        fieldId: fieldId,
        sortOption: sortOption
    };
}

export function filterRecords(table, fieldId, condition, filterQuery) {
    return {
        type: 'FILTER_RECORDS',
        table: table,
        fieldId: fieldId,
        condition: condition,
        filterQuery: filterQuery,
    };
}

export function removeFilter() {
    return {
        type: 'REMOVE_FILTER'
    };
}

export function changeFieldType(tableId, fieldType, fieldId) {
    return {
        type: 'CHANGE_FIELD_TYPE',
        tableId: tableId,
        fieldType: fieldType,
        fieldId: fieldId
    };
}
export function changeFieldName(tableId, fieldId, fieldName) {
    return {
        type: 'CHANGE_FIELD_NAME',
        tableId: tableId,
        fieldId: fieldId,
        fieldName: fieldName,
    };
}

export function deleteField(tableId, fieldId) {
    return {
        type: 'DELETE_FIELD',
        tableId: tableId,
        fieldId: fieldId,
    };
}

export function deleteRecord(tableId, recordId) {
    return {
        type: 'DELETE_RECORD',
        tableId: tableId,
        recordId: recordId
    };
}

export {
    getBaseById,
    getTables,
    setActive,
    addTable,
    switchTable,
    togglePopup,
    openMenu,
    closeMenu,
    setTabsModal,
    checkTableName,
    addTableToBaseById,
    setTableIdToActiveModal,
    updateTable,
    addRecord,
    selectRecord,
    activateRecord,
    changeRecord,
    blurRecord,
    blurRecordComponent,
    deleteTable,
    openRecordDialog,
    addComment,
    getCoworkersList
};
