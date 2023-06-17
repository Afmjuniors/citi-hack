

export class RemessaBuniness {

    public autenticarRemessa = async (json: string): Promise<{ message: string }> => {
        console.log(JSON.parse(json))
        const data: {}[] = JSON.parse(json).data





        return {
            message: "JSON recebido com sucesso"
        }
    }



}