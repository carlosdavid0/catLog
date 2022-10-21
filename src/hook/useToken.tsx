import {useAsyncStorage} from '@react-native-async-storage/async-storage'

export default async function useToken(){
    const {getItem} = useAsyncStorage('@angelim/token')
    const token = await getItem()
    return token
}   