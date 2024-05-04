<template >
    <input type="text" class="form-control" :value="modelValue" @input="udateInput"/>
</template>

<script>
export default {
    name: 'Input',
        props: {
            modelValue: [String,Number],
        },
    methods: {
        udateInput(e) {
            this.$emit("update:modelValue", e.target.value)
        },
    },
}
</script>

<style scoped>
     
</style>