
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    AddCateg,
    DeleteCateg,
    GetAllCategs,
    UpdateCateg
} from "./apiCateg.js";
import { useToast } from '../../contexts/ToastContext';

function useGetCategs() {
    const query = useQuery({
        queryKey: ['allCategs'],
        queryFn: () => GetAllCategs(),
        staleTime: 10 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 20 * 60 * 1000, // Keep data in cache for 20 minutes
        retry: (failureCount, error) => {
            return failureCount < 3;
        }
    });
    return query;
}

function useAddCateg() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isAdding, mutate:addCateg} = useMutation(
        {
            mutationFn: AddCateg,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, הקטגוריה לא נוספה", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allCategs'],
                })
                showToast("הקטגוריה נוספה בהצלחה","success")
            },
        }
    );

    return {isAdding, addCateg};
}

function useUpdateCateg() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isUpdating, mutate:updateCateg} = useMutation(
        {
            mutationFn: UpdateCateg,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, הקטגוריה לא עודכן", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allCategs'],
                })
                showToast("הקטגוריה עודכן בהצלחה","success")
            },
        }
    );

    return {isUpdating, updateCateg};
}

function useDeleteCateg() {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    const {isLoading:isDeleting, mutate:deleteCateg} = useMutation(
        {
            mutationFn: DeleteCateg,
            onError: async (err) => {
                console.log("err", err)
                showToast("חלה תקלה, הקטגוריה לא נמחק", "error")
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allCategs'],
                })
                showToast("הקטגוריה נמחק בהצלחה","info")
            },
        }
    );

    return {isDeleting, deleteCateg};
}

export {
    useGetCategs,
    useAddCateg,
    useUpdateCateg,
    useDeleteCateg,
};
