<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        <v-container fill-height>
                            <v-layout>
                                <v-flex>
                                    <span class="headline white--text">Lorem, ipsum dolor.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <h2>Lorem Ipsup dolor.</h2>
                    </v-card-title>
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos nam rerum quo perspiciatis quos et quia nemo aliquam at debitis qui architecto voluptas alias numquam iste saepe, quibusdam placeat!</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="info" text>
                            Acción
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6 md4 lg3>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        <v-container fill-height>
                            <v-layout>
                                <v-flex>
                                    <span class="headline white--text">Lorem ipsum dolor sit.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <h2>Lorem Ipsup dolor.</h2>
                    </v-card-title>
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos nam rerum quo perspiciatis quos et quia nemo aliquam at debitis qui architecto voluptas alias numquam iste saepe, quibusdam placeat!</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="info" text @click="dialog = !dialog">
                            Acción
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <!-- dialogs -->
        <v-dialog v-model="dialog" max-width="500" color="primary" persistent>
            <v-card>
                <v-card-title>Lorem, ipsum dolor.</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, deserunt impedit nostrum odio quisquam aliquid dolor voluptatem, iusto itaque, veritatis et sit doloremque. Facilis voluptas, libero nam facere doloremque dolor?</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="danger" @click="dialog = !dialog">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- dialogs -->

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog: true
        }
    }
}
</script>