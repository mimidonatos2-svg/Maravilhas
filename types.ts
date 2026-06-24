export interface Versiculo {
  id?: string;
  texto: string;
  referencia: string;
}

export interface RadioConfig {
  id?: string;
  nome: string;
  streamingUrl: string;
  logoUrl: string;
}

export interface TvConfig {
  id?: string;
  nome: string;
  streamUrl: string;
  ativa: boolean;
  videoId?: string;
  mensagemVideoId?: string;
}

export interface ProgramacaoItem {
  id?: string;
  nome: string;
  horarioInicio: string;
  horarioFim: string;
  apresentador?: string;
  diasSemana?: string[];
}

export interface VideoItem {
  id?: string;
  titulo: string;
  videoId: string;
  ordem?: number;
  dataAdicionado?: string;
}

export interface PodcastItem {
  id?: string;
  titulo: string;
  audioUrl: string;
  apresentador?: string;
  dataCriacao: string;
  duracao?: string;
}

export interface PedidoOracao {
  id?: string;
  nome: string;
  pedido: string;
  dataEnvio: string;
  status?: string;
}

export interface PalavraItem {
  id?: string;
  titulo: string;
  texto: string;
  autor?: string;
  dataCriacao: string;
}

export interface DoacoesConfig {
  pixChave: string;
  pixQrCodeUrl?: string;
  instrucoes?: string;
  banco?: string;
  titular?: string;
}

export interface RedesSociaisLinks {
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface NotificacaoItem {
  id?: string;
  titulo: string;
  mensagem: string;
  dataEnvio: string;
}

export interface TemploItem {
  id?: string;
  nome: string;
  endereco: string;
}

export interface ContatoConfig {
  id?: string;
  email: string;
  telefone?: string;
}
