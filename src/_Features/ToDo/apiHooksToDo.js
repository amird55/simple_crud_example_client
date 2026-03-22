import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    AddToDo,
    DeleteToDo,
    GetAllToDos,
    UpdateToDo
} from "./apiToDo.js";
import { useToast } from '../../contexts/ToastContext';

function useGetToDos() {
    const query = useQuery({
        queryKey: ['allToDos'],
        queryFn: () => GetAllToDos(),
        staleTime: 10 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 20 * 60 * 1000, // Keep data in cache for 20 minutes
        retry: (failureCount, error) => {
            return failureCount < 3;
        }
    });
    return query;
}

function useAddToDo() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isAdding, mutate:addToDo} = useMutation(
        {
            mutationFn: AddToDo,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, המשימה לא נוספה", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allToDos'],
                })
                showToast("המשימה נוספה בהצלחה","success")
            },
        }
    );

    return {isAdding, addToDo};
}

function useUpdateToDo() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isUpdating, mutate:updateToDo} = useMutation(
        {
            mutationFn: UpdateToDo,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, המשימה לא עודכנה", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allToDos'],
                })
                showToast("המשימה עודכנה בהצלחה","success")
            },
        }
    );

    return {isUpdating, updateToDo};
}

function useDeleteToDo() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isDeleting, mutate:deleteToDo} = useMutation(
        {
            mutationFn: DeleteToDo,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, המשימה לא נמחקה", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allToDos'],
                })
                showToast("המשימה נמחקה בהצלחה","info")
            },
        }
    );

    return {isDeleting, deleteToDo};
}

export {
    useGetToDos,
    useAddToDo,
    useUpdateToDo,
    useDeleteToDo,
};
