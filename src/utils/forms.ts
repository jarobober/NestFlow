const rules = {
  required: (v: string) => !!v || 'This field is required',
  email: (v: string) =>
    !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
  minLength: (length: number) => (v: string) =>
    v.length >= length || `Minimum length is ${length} characters`
}

export { rules }
