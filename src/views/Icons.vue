<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn>
                    Texto
                </v-btn>
                <v-btn
                    color="info"
                >
                    Texto Color
                </v-btn>
                <v-btn
                    color="red"
                    dark
                >
                    Texto Color dark
                </v-btn>
                <v-btn
                    color="secondary"
                    text
                >
                    Sin fondo
                </v-btn>
                <v-btn
                    color="secondary"
                    large
                >
                    Grande
                </v-btn>
                <v-btn
                    color="secondary"
                    small
                >
                    Chico
                </v-btn>
                <v-btn
                    color="secondary"
                    disabled
                >
                    Desactivado
                </v-btn>
                <v-btn
                    color="info"
                    depressed
                >
                    Botón
                </v-btn>

                <v-btn>
                    <v-icon>mdi-xbox-controller</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="info">
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="red" dark icon>
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="red" fab dark>
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="red" fab dark large>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn color="red" fab dark small>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn color="success">
                    Foro
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success">
                    Foro
                    <v-icon class="ml-2">mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success">
                    Foro D
                    <v-icon right>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success">
                    <v-icon left>mdi-forum</v-icon>
                    Foro L
                </v-btn>
                <v-btn color="success" outlined >
                    Foro Outline
                    <v-icon right>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success" outlined block >
                    Foro Outline
                    <v-icon right>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success" outlined block rounded>
                    Foro Outline
                    <v-icon right>mdi-forum</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
}
</script>