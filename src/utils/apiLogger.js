const apiLogs = [];

export const logApi = (log) => {
    apiLogs.push(log);

    console.table(apiLogs);
};

export const getApiLogs = () => apiLogs;