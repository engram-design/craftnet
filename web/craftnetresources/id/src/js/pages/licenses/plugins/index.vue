<template>
    <div>
        <h1>Plugins</h1>

        <div v-if="pluginLicenses.length > 0" class="card card-table responsive-content">
            <plugin-licenses-table :licenses="pluginLicenses"></plugin-licenses-table>
        </div>

        <empty v-else>
            <icon icon="key" cssClass="text-5xl mb-4 text-grey-light" />
            <div class="font-bold">No plugin licenses</div>
            <div>You don’t have any plugin licenses yet.</div>
        </empty>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import PluginLicensesTable from '../../../components/licenses/PluginLicensesTable';
    import Empty from '../../../components/Empty';

    export default {

        components: {
            PluginLicensesTable,
            Empty,
        },

        computed: {

            ...mapState({
                pluginLicenses: state => state.licenses.pluginLicenses,
            }),

        },

    }
</script>
