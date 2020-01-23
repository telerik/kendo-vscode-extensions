<template>
    <td v-if="!dataItem['inEdit']" class="k-command-cell">
        <button
            class="k-primary k-button k-grid-edit-command"
            @click="editHandler">
            Edit
        </button>

        <button
            class="k-button k-grid-remove-command"
            @click="removeHandler">
            Remove
        </button>
    </td>
    <td v-else class="k-command-cell">
            <button
                class="k-button k-grid-save-command"
                @click="addUpdateHandler">
                {{this.dataItem.ProductID? 'Update' : 'Add'}}
            </button>

            <button
                class="k-button k-grid-cancel-command"
                @click="cancelDiscardHandler">
                {{this.dataItem.ProductID? 'Cancel' : 'Discard'}}
            </button>
        </td>
</template>
<script>
export default {
     props: {
        field: String,
        dataItem: Object,
        format: String,
        className: String,
        columnIndex: Number,
        columnsCount: Number,
        rowType: String,
        level: Number,
        expanded: Boolean,
        editor: String
    },
    methods: {
        editHandler: function() {
            this.$emit('edit', {dataItem:this.dataItem});
        },
        removeHandler: function() {
            this.$emit('remove', {dataItem:this.dataItem});
        },
        addUpdateHandler: function() {
            this.$emit('save', {dataItem:this.dataItem});
        },
        cancelDiscardHandler: function() {
            this.$emit('cancel', {dataItem:this.dataItem});
        }
    }
}
</script>