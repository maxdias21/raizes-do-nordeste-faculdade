export function useForm({fields, setFields, setHasErrors}) {
    function handleChange(e, type) {
        const newFields = fields.map((field) => {
            if (field.placeholder === type) {
                if (type === "email") {
                    const hasEmailError = e.target.value === "uninteremail@uninter.com";
                    return {
                        ...field,
                        type: "email",
                        value: e.target.value,
                        errors: !hasEmailError ? ["O email precisa ser uninteremail@uninter.com"] : []
                    };
                } else if (type === "senha") {
                    const hasPasswordError = e.target.value === "uninter";
                    return {
                        ...field,
                        value: e.target.value,
                        errors: !hasPasswordError ? ["A senha tem que ser uninter"] : []
                    };
                }
            }
            return field;
        });

        setFields(newFields);

        const hasErrors = newFields.some((field) => field.errors.length > 0);
        setHasErrors(hasErrors);
    }

    return {handleChange}
}