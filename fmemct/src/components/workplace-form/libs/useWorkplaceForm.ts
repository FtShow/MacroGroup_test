import {type ChangeEvent, type FormEvent, useState} from "react";
import {gql} from "@apollo/client";
import {useMutation} from "@apollo/client/react";
import {GET_WORKPLACES} from "../../workplace-list/libs/useGetWorkplaceList.ts";

const CREATE_WORKPLACE = gql`
  mutation CreateWorkplace($name: String!, $description: String, $ipAddress: String) {
    createWorkplace(name: $name, description: $description, ipAddress: $ipAddress) {
      workplace {
        id
        name
        description
        ipAddress
      }
    }
  }
`;

export const useWorkplaceForm = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        ipAddress: "",
        isComputerPlace: false,
    });
    const [createWorkplace, { loading, error }] = useMutation(CREATE_WORKPLACE, {
        refetchQueries: [{ query: GET_WORKPLACES }],
    });

    const handleChange =
        (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
            setForm((prev) => ({
                ...prev,
                [field]: event.target.value,
            }));
        };

    const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            isComputerPlace: event.target.checked,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const result = await createWorkplace({
                variables: {
                    name: form.name,
                    description: form.description,
                    ipAddress: form.isComputerPlace ? form.ipAddress : "",
                },
            });
            console.log(result.data);
            setForm(prev => ({
                ...prev,
                name: "",
                description: "",
                ipAddress: "",
            }));
        } catch (err) {
            console.error(err);
        }
    };
    return {form, handleChange, handleSubmit, handleSwitchChange, loading, error}
};
