import { api, apiV2} from "@/services/http";


export default {
    'listSafes': () => {
        return new Promise((resolve, reject) => {
            apiV2.get(`/sign/safes`,)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'newFolder': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/new-folder`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'editFolder': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/rename-folder`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'listFolders': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.get(`/sign/folders/${params.uuid_safe}/orcamento/${params.id_orcamento}`,)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'listDocuments': (params) => {

        let url = params.id_pessoa ? `${params.id_orcamento}/${params.id_pessoa}` : `${params.id_orcamento}`

        return new Promise((resolve, reject) => {
            apiV2.get(`/sign/documents/${params.uuid_safe}/folder/${params.uuid_folder}/orcamento/${url}`,)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'upoloadDocument': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/upload-file`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'cancelDocument': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/cancel/document`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'donwloadDocument': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/donwload/document`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'sendDocumentSign': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/document/sendtosigner/${params.uuidDoc}`,{
                message: params.message,
                skip_email: params.skip_email,
                workflow: params.workflow,
            })
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'listSings': (uuidDoc) => {
        return new Promise((resolve, reject) => {
            apiV2.get(`/sign/document/list/${uuidDoc}`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'createSigns': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/document/create/${params.uuiDoc}`,params.signers)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'removeSigns': (params) => {
        return new Promise((resolve, reject) => {
            apiV2.post(`/sign/document/remove/${params.uuidDoc}`,{
                email: params.email,
                key_signer: params.key_signer
            })
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },

}
